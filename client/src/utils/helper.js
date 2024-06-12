export const formatDateToCustomISOString = (date) => {
     const year = date.getUTCFullYear();
     const month = String(date.getUTCMonth() + 1).padStart(2, '0');
     const day = String(date.getUTCDate()).padStart(2, '0');
     return `${year}-${month}-${day}T00:00:00.000+00:00`;
};