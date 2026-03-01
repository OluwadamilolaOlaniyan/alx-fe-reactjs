import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <div style={{ marginBottom: "60px" }}>
        <RegistrationForm />
      </div>

      <div>
        <FormikForm />
      </div>
    </div>
  );
}