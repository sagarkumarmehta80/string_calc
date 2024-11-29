const StringCalculator = ({ string = '' }) => {
    let trimmedString = string.trim();
    let splittedString = trimmedString.split(/[\\n,; ]+/);
    let errorText = 'negative numbers not allowed <negative_number>';
    let errors = [];
    let sum = null;
    if (trimmedString.length > 0) {
        sum = splittedString
            .map((val) => Number(val))
            .reduce((acc, val) => {
                if (val >= 0) {
                    acc = acc + val;
                } else {
                    errors.push(errorText);
                }
                return acc;
            });
        return (
            <div>
                <h1>Sum : {sum}</h1>
                {errors.length > 0 && errors.join(',')}
            </div>
        );
    } else return 0;
};

export default StringCalculator;
