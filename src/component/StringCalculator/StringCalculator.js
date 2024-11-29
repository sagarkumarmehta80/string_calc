const StringCalculator = ({ string = '' }) => {
    let trimmedString = string.trim();
    let splittedString = trimmedString.split(/[\\n,; ]+/);
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
                            <div>{val}</div>
                        ))}
                    </div>
                )}
            </div>
        );
    } else return 0;
};

export default StringCalculator;
