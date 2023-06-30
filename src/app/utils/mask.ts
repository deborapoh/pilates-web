export const formatPhone = (value: string): string => {
  // Format the telephone number based on the Brazilian phone number pattern
  // Assuming the number has 10 or 11 digits
  const match = value.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/)

  if (match) {
    const formattedNumberParts: string[] = [];
    if (match[1]) {
      formattedNumberParts.push(`(${match[1]}`);
    }
    if (match[2]) {
      formattedNumberParts.push(`) ${match[2]}`);
    }
    if (match[3]) {
      formattedNumberParts.push(`-${match[3]}`);
    }
    return formattedNumberParts.join('');
  }

  return value; // Return the value as is if it doesn't match the pattern
}
