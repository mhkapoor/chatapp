export const timeCalculate = (given_seconds: any) => {
    const dateObj = new Date(given_seconds * 1000);
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const seconds = dateObj.getSeconds();

    const timeString =
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0");

     
     // seconds.toString().padStart(2, "0");
    return timeString;
  };
