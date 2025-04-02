import axios from 'axios'
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_51R8utMCLinbw94xQcXQKTj299y4rHeMiJSWintynX1fw41W00hYNKnz84OtiTCPcP7xNMrOWNtboSHPHO2xCpUXw00kDyl9W6Y');

export const bookTour = async tourId => {
    try {
      const session = await axios(
        `/api/v1/bookings/checkout-session/${tourId}`,
        { withCredentials: true }
      );
      await stripe.redirectToCheckout({
        sessionId: session.data.session.id
      });
    } catch (err) {
      showAlert('error', err);
    }
  };