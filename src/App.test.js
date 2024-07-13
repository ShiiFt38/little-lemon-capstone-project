import { render, screen } from '@testing-library/react';
import Reservation from './pages/Reservation';

test('Renders the Booking Form Heading', () => {
  render(<Reservation/>);
  const headingElement = screen.getByText("Table reservations");

  expect(headingElement).toBeinTheDocument();
});