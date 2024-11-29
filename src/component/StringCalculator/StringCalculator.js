const StringCalculator = ({ string = '' }) => {
    let delimiters = '\\n, ';
    let isSeperateLinePresent = string.substring(0, 2) === '//';
    if (isSeperateLinePresent) {
        delimiters += string.substring(2, 3);
        string = string.substring(3, string.length);
    }
    let trimmedString = string.trim();
    let regex = new RegExp(`[${delimiters}]+`);
    let splittedString = trimmedString.split(regex);
    let errorText = 'Negative numbers not allowed';
    let errors = [];
    let sum = null;
    if (trimmedString.length > 0) {
        sum = splittedString
            .map((val) => Number(val))
            .reduce((acc, val) => {
                if (val >= 0) {
                    acc = acc + val;
                } else {
                    errors.push(`${val} : ${errorText}`);
                }
                return acc;
            });
        return (
            <div>
                <div>Sum : {sum}</div>
                <br />
                {errors.length > 0 && (
                    <div>
                        Errors:
                        {errors.map((val) => (
                            <div key={val}>{val}</div>
                        ))}
                    </div>
                )}
            </div>
        );
    } else return 0;
};

export default StringCalculator;
