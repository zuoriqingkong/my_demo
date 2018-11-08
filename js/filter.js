(function () {
    function filter() {
        const products = [
            {name: 'cucumber', type: 'vegetable'},
            {name: 'banana', type: 'fruit'},
            {name: 'celery', type: 'vegetable'},
            {name: 'orange', type: 'fruit'},
        ]
        let filtered = products.filter((product) => {return product.type === 'vegetable'})
        console.log(filtered);
    }

    filter();

}())