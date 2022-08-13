const hideAlert = () => {
  const alertElement = document.querySelector(".alerter");
  if (alertElement) {
    alertElement.parentElement.removeChild(alertElement);
  }
};

export const showAlert = (type, msg) => {
  hideAlert();
  const markup = `<div class="alerter alert--${type}">${msg}</div>`;
  document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
  window.setTimeout(hideAlert, 4000);
};
