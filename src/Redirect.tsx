import logoImage from './assets/ntcg_logo.png';

const RedirectPage = () => {
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get('code');

  const showToast = (message: string, type = 'info') => {
    const container = document.getElementById('toast-container');

    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast text-white px-4 py-2 rounded mb-2 shadow-md';
    toast.style.transition = 'opacity 0.3s ease-in-out';
    toast.style.opacity = '0.95';

    // Apply background based on type
    if (type === 'success') toast.style.backgroundColor = '#28a745';
    if (type === 'error') toast.style.backgroundColor = '#dc3545';
    if (type === 'warning') toast.style.backgroundColor = '#ffc107';
    if (type === 'info') toast.style.backgroundColor = '#17a2b8';

    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  };

  const handleCopyToClipboard = () => {
    if (code) {
      navigator.clipboard.writeText(code).then(
        () => {
          showToast('Code copied to clipboard!', 'success');
          window.close();
        },
        (err) => {
          console.error('Could not copy text: ', err);
          showToast('Failed to copy code.', 'error');
        }
      );
    }
  };
  

  return (
    <div className="relative flex flex-col items-center justify-center h-[695px] overflow-hidden w-full">
      {/* Toast container */}
      <div id="toast-container" className="absolute top-4 right-4 z-50 flex flex-col items-end" />

      <img src={logoImage} alt="logo" width={250} />
      {!code ? (
        <div className="text-center">
          <p className="text-xl text-red-600">Error: Code not generated</p>
          <p>Please try generating a new code.</p>
        </div>
      ) : (
        <>
          <p className="text-xl">Authorization successful</p>
          <p className="mb-2">Copy the code to setup</p>
          <p className="flex flex-col items-center gap-2.5 w-[309px] scroll-auto overflow-auto mb-2 no-scrollbar">
            {code}
          </p>
          <button
            onClick={handleCopyToClipboard}
            className="flex items-center justify-center gap-2 bg-[#242933] text-white w-[150px] p-2 rounded-lg cursor-pointer"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21 8C21 6.34315 19.6569 5 18 5H10C8.34315 5 7 6.34315 7 8V20C7 21.6569 8.34315 23 10 23H18C19.6569 23 21 21.6569 21 20V8ZM19 8C19 7.44772 18.5523 7 18 7H10C9.44772 7 9 7.44772 9 8V20C9 20.5523 9.44772 21 10 21H18C18.5523 21 19 20.5523 19 20V8Z"
                  fill="white"
                />
                <path
                  d="M6 3H16C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1H6C4.34315 1 3 2.34315 3 4V18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18V4C5 3.44772 5.44772 3 6 3Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>Copy code</span>
          </button>
        </>
      )}      
    </div>
  );
};

export default RedirectPage;
