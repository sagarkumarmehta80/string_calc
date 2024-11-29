const StringCalculator = ({ string = '' }) => {
    let trimmedString = string.trim();
    let splittedString = trimmedString.split(/[\\n,; ]+/);
    if (trimmedString.length > 0) {
        return splittedString
            .map((val) => Number(val))
            .reduce((acc, val) => (acc = acc + val));
    } else return 0;
};

export default StringCalculator;
