import React, { useState } from 'react';

const Toaster = () => {
  const [toast, setToast] = useState({ isVisible: false, message: '' });

  const showToast = message => {
    setToast({ isVisible: true, message });
    setTimeout(() => setToast({ isVisible: false, message: '' }), 2000); // Here, 2000ms is the duration after which toast will disappear.
  }

  return (
    <div>
      <button onClick={() => showToast('This is a toast!')}>Show Toast</button>
      {toast.isVisible && 
        <div className="toast">
          <p>{toast.message}</p>
        </div>
      }
    </div>
  );
}

export default Toaster;