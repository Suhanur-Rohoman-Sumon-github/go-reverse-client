import image from "../../assets/pngtree-check-mark-button-green-confirmation-png-image_4540174-removebg-preview.png";

const PaymentConfarmationPage = () => {
  return (
    <div className="container mx-auto py-16 px-4 text-center">
      <img
        src={image}
        alt="Confirmation"
        className="mx-auto mb-8 h-64 w-[300px]"
      />
      <h1 className="text-primary ">
        Thank You for Your Booking ! <br /> Enjoy your time
      </h1>
      <p className="text-secondary">
        Your order has been successfully placed. We will send you a confirmation
        email shortly. If you have any questions, feel free to contact our
        support team.
      </p>
    </div>
  );
};

export default PaymentConfarmationPage;
