const xlog = (param) => {
    if (process.env.NODE_ENV === 'production')
        return false;
    console.log(`%c ${param}`, 'background: #222; color: #bada55');
}
export default xlog;