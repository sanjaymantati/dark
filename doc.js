const bucket_price = 10416.66;
const total_window_week = 48*10;
const week_for_add_window = 4;
const initial_bucket = 1;
const min =0.0;
const max =3.0;
const iteration = 10000;

function generateRandomNumber() {
    return Math.random() * (max - min) + min;
}

function test() {
    const list = [];
    for (let i = 0; i < iteration; i++) {
        const result = compute()
        list.push(result)
    }
    const avg = list.reduce((p, c) => p + c, 0) / list.length;
}

function compute() {
    const initial_bucket_list = []
    for (let i = 0; i < initial_bucket; i++) {
        initial_bucket_list.push(bucket_price)
    }
    const bucket_list = initial_bucket_list.slice();
    for (let current_week = 0; current_week < total_window_week; current_week++) {
        for (let i = 0; i < bucket_list.length; i++) {
            const percentage = generateRandomNumber();
            const current_value = bucket_list[i];
            bucket_list[i] = current_value + (current_value * (percentage / 100));
        }
        if(current_week%week_for_add_window === 0){
            bucket_list.push(bucket_price)
        }
    }
    return bucket_list.reduce((p, c) => p + c, 0)
}
test()
