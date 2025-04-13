import { useState, useEffect } from 'react';
import { Container, Table, Button, Form } from 'react-bootstrap';
import axios from 'axios';

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/bookings`);
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/api/bookings/${id}`, { status });
      fetchBookings();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const exportToExcel = () => {
    alert('Exporting to Excel... (Requires backend implementation with xlsx library)');
  };

  return (
    <section className="py-5">
      <Container>
        <h2 className="urdu">ایڈمن ڈیش بورڈ</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Animal</th>
              <th>Day</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.name}</td>
                <td>{booking.phone}</td>
                <td>{booking.animalType}</td>
                <td>{booking.qurbaniDay}</td>
                <td>{booking.status}</td>
                <td>
                  <Form.Select
                    value={booking.status}
                    onChange={(e) => updateStatus(booking._id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Processing">Processing</option>
                    <option value="Delivered">Delivered</option>
                  </Form.Select>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="success" onClick={exportToExcel}>Export to Excel</Button>
      </Container>
    </section>
  );
}

export default AdminDashboard;