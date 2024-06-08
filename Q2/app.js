// document.addEventListener("DOMContentLoaded", function(){

//     const brands = {
//         "Redmi":[
//             "note 13",
//             "redmi 12",
//             "redmi note 11 pro",
//             "redmi 13c"
//         ],
//         "Samsung":[
//             "Galaxy s9",
//             "Samsung A20",
//             "Samusng A10",
//             "Samsung M11"
//         ],
//         "Realme":[
//             "realme c3",
//             "realme 9c",
//             "realme 9i",
//             "realme Nazro 50"
//         ]
//     }


//     const brandSelect = document.getElementById('brand');
//     const modelSelect = document.getElementById('model');

//     const brandKeys = Object.keys(brands);
//     const model = Object.values(brands);

//     for(let i=0; i <brandKeys.length;i++) {
//         let option = document.createElement('option');
//         option.value = brandKeys[i];
//         option.textContent = brandKeys[i];
//         brandSelect.appendChild(option);
//     }

//     brandSelect.addEventListener('change' , function() {
//         let selectedBrand = brandSelect.value;
//         modelSelect.innerHTML = '<option value="">select model</option>'
//         if(selectedBrand) {
//             let model = brands[selectedBrand];

//             for(let i=0 ; i<model.length;i++){
//                 let option = document.createElement('option')
//                 option = model[i]
//                 option.textContent = model[i]
//                 modelSelect.appendChild(option)
//             }
//         }
    
//     })

// })

document.addEventListener("DOMContentLoaded", function() {
    const brands = {
        "Redmi": ["note 13", "redmi 12", "redmi note 11 pro", "redmi 13c"],
        "Samsung": ["Galaxy s9", "Samsung A20", "Samsung A10", "Samsung M11"],
        "Realme": ["realme c3", "realme 9c", "realme 9i", "realme Nazro 50"]
    };

    const brandSelect = document.getElementById('brand');
    const modelSelect = document.getElementById('model');
    const selectionParagraph = document.getElementById('selection');

    const brandKeys = Object.keys(brands);

    // Populate the brand dropdown
    for (let i = 0; i < brandKeys.length; i++) {
        let option = document.createElement('option');
        option.value = brandKeys[i];
        option.textContent = brandKeys[i];
        brandSelect.appendChild(option);
    }

    // Event listener for brand selection
    brandSelect.addEventListener('change', function() {
        let selectedBrand = brandSelect.value;
        let selectedModel = modelSelect.value;
        let models = brands[selectedBrand];


        // Clear previous model options
        modelSelect.innerHTML = '<option value="">--Select Model--</option>';

        if (selectedBrand) {

            // Populate the model dropdown
            for (let i = 0; i < models.length; i++) {
                let option = document.createElement('option');
                option.value = models[i];
                option.textContent = models[i];
                modelSelect.appendChild(option);
            }
        }
       
    });
    modelSelect.addEventListener('change', function() {
        let selectedBrand = brandSelect.value;
        let selectedModel = modelSelect.value;

        if (selectedBrand && selectedModel) {
            selectionParagraph.textContent = `You have selected: ${selectedBrand} - ${selectedModel}`;
        }
    });
});


