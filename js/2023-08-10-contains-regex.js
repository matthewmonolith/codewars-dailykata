function alphanumeric(string) {
    const alphanumericRegex = /^[a-zA-Z0-9]*$/;
  
    if (string.length === 0) {
      return false;
    }
  
    return alphanumericRegex.test(string);
  }
  