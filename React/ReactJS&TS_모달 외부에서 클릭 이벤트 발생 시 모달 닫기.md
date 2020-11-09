# ReactJS_모달 외부에서 클릭 이벤트 발생 시 모달 닫기

```react
// Parent component
import React, { useState } from "react";
import Modal from "./Modal";

export default function Parent() {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      <button onClick={openModal}>open menu</button>
      {open && <Modal closeModal={closeModal}></Modal>}
    </>
  );
}

// Modal Component
import React, { useEffect, useRef, useCallback } from "react";

interface ModalProps {
  closeModal: () => void;
}
export default function Modal({ closeModal }: ModalProps) {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  const escapeListener = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );
  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (!(ref.current! as any).contains(e.target)) {
        closeModal?.(); // using optional chaining here, change to onClose && onClose(), if required
      }
    },
    [closeModal, ref]
  );

  useEffect(() => {
    // Attach the listeners on component mount.
    document.addEventListener("click", clickListener);
    document.addEventListener("keyup", escapeListener);
    // Detach the listeners on component unmount.
    return () => {
      document.removeEventListener("click", clickListener);
      document.removeEventListener("keyup", escapeListener);
    };
  }, []);

  return (
    <div
      style={{ width: "100px", height: "100px", background: "green" }}
      ref={ref}
    >
      This is modal
    </div>
  );
}
```