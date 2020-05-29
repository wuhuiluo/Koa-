function f1() {
    try {
        1/a
    } catch(error) {
        throw error
    }
    return 'success'
}
console.log(f1())