import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function WinnerModal() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Congrats X Player! You Win!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Here</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
