import Toast from "react-bootstrap/Toast";
export default function MToast() {
  return (
    <>
      <Toast className="bg-secondary shadow-none w-100 mt-3 mb-3">
        <Toast.Header className="p-3">
          <p className="me-auto">
            <strong>Hey!</strong>
            <br />
            <br />
            People are looking at your profile. Find out who.
          </p>
        </Toast.Header>
      </Toast>
    </>
  );
}
