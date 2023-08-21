function AmIAfraid(dayOfWeek, number) {
    switch (dayOfWeek.toLowerCase()) {
        case "monday":
            return number === 12;
        case "tuesday":
            return number > 95;
        case "wednesday":
            return number === 34;
        case "thursday":
            return number === 0;
        case "friday":
            return number % 2 === 0;
        case "saturday":
            return number === 56;
        case "sunday":
            return number === 666 || number === -666;
        default:
            return false; // Invalid dayOfWeek input
    }
}