/**
     * 
     * @param {string | number} rating 
     * @returns number
     */
const CleanRatingRenderer = (rating) => {
    return Number(rating).toFixed(1);
}
export default CleanRatingRenderer;