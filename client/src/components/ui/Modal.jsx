import React, { useEffect, useRef }  from 'react'

function Modal({ content, isOpen, onClose, title, styles, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
   <div className={styles.container}>
      <div className={styles.wrapper}>
        <div
          className={styles.modalClose}
          onClick={onClose}
        />  
        <div className={styles.header.container}>
          <div className={styles.header.wrapper}>
            <div className={styles.header.content}>
              <div className={styles.header.headerContainer}>
                <h3 className={styles.header.title}>
                  {title}
                </h3>
                {children}
              </div>
            </div>
          </div>
          <div className={styles.btn.container}>
            <button
              type="button"
              onClick={onClose}
              className={styles.btn.buttonClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal