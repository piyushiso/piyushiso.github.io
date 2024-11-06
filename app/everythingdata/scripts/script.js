/* SEGMENT A START */

// let file, df, data

// document.getElementById("csvUpload").addEventListener("change", async function (event) {
//     file = event.target.files[0]
//     if (file && (file.type === "text/csv" || file.name.endsWith(".csv"))) {
//         dfd.readCSV(file)
//             .then(dataFrame => {
//                 df = dataFrame
//                 data = dfd.toJSON(df)

//                 createVisualizations(data)  // Initial visualizations
//                 generateCharts(df)          // Additional charts

//                 checkForNaN(df.columns)

//                 document.getElementById("replaceNAN").hidden = false
//                 document.getElementById("replaceNAN").disabled = false
//             })
//             .catch(err => console.log(err))

//     } else {
//         console.log("Please enter a CSV file")
//     }
// })

// // Function to create visualizations with axis selection
// function createVisualizations(data) {
//     let dataFrame = new dfd.DataFrame(data)

//     if (dataFrame) {
//         visualizeTable(dataFrame)   // Display table

//         // For charts without specific axis selection
//         dataFrame.plot("visuals-bar").bar()

//         // For charts with x and y-axis control
//         setupAxisControl(dataFrame, "visuals-line", "Plot Line", visualizeLine)
//         setupAxisControl(dataFrame, "visuals-box", "Plot Boxplot", visualizeBoxplot)
//         setupAxisControl(dataFrame, "visuals-hist", "Plot Histogram", visualizeHistogram)
//         visualizeScatter(dataFrame)  // Scatter plot already set up
//     } else {
//         console.log("DataFrame not loaded.")
//     }
// }

// function clearVisualContainer(plotId) {
//     const container = document.getElementById(plotId)
//     if (container) {
//         container.innerHTML = ''  // Clear previous content
//     }
// }

// // Setup Axis Selection Controls
// function setupAxisControl(dataFrame, plotId, buttonText, plotFunction) {
//     const controlDiv = document.getElementById(`${plotId}-control`)
//     controlDiv.innerHTML = ""  // Clear previous controls if any

//     // Create dropdowns for x and y axes
//     const xSelect = document.createElement("select")
//     const ySelect = document.createElement("select")
//     xSelect.classList.add("form-select", "me-2")
//     ySelect.classList.add("form-select", "me-2")

//     dataFrame.columns.forEach(col => {
//         const optionX = document.createElement("option")
//         optionX.value = col
//         optionX.text = col
//         xSelect.appendChild(optionX)

//         const optionY = document.createElement("option")
//         optionY.value = col
//         optionY.text = col
//         ySelect.appendChild(optionY)
//     })

//     const plotButton = document.createElement("button")
//     plotButton.classList.add("btn", "btn-primary")
//     plotButton.innerText = buttonText

//     plotButton.addEventListener("click", () => {
//         const xCol = xSelect.value
//         const yCol = ySelect.value

//         if (xCol && yCol) {
//             plotFunction(dataFrame, plotId, xCol, yCol)
//         } else {
//             alert("Please select both X and Y axes.")
//         }
//     })

//     controlDiv.append(xSelect, ySelect, plotButton)
// }

// // Visualization Functions
// function visualizeTable(dataFrame) {
//     dataFrame.plot("visuals-table").table()
// }

// function visualizeLine(dataFrame, plotId, xCol, yCol) {
//     dataFrame.plot(plotId).line({ config: { x: xCol, y: yCol } })
// }

// function visualizeBoxplot(dataFrame, plotId, xCol, yCol) {
//     dataFrame.plot(plotId).box({ config: { x: xCol, y: yCol } })
// }

// function visualizeHistogram(dataFrame, plotId, xCol, yCol) {
//     dataFrame.plot(plotId).hist({ config: { x: xCol, y: yCol } })
// }

// function visualizeScatter(dataFrame) {
//     const xAxisSelect = document.getElementById("x-axis-select")
//     const yAxisSelect = document.getElementById("y-axis-select")

//     xAxisSelect.innerHTML = ''
//     yAxisSelect.innerHTML = ''

//     dataFrame.columns.forEach(column => {
//         const optionX = document.createElement("option")
//         optionX.value = column
//         optionX.text = column
//         xAxisSelect.appendChild(optionX)

//         const optionY = document.createElement("option")
//         optionY.value = column
//         optionY.text = column
//         yAxisSelect.appendChild(optionY)
//     })

//     document.getElementById("plot-scatter").addEventListener("click", () => {
//         const xColumn = xAxisSelect.value
//         const yColumn = yAxisSelect.value

//         if (xColumn && yColumn) {
//             dataFrame.plot("visuals-scatter").scatter({ config: { x: xColumn, y: yColumn } })
//         } else {
//             alert("Please select both X and Y axes.")
//         }
//     })
// }

// function generateCharts(dataFrame) {

//     visualizeTable(dataFrame)    

//     clearVisualContainer("visuals-bar")
//     dataFrame.plot("visuals-bar").bar()

//     clearVisualContainer("visuals-box")
//     dataFrame.plot("visuals-box").box()

//     clearVisualContainer("visuals-line")
//     dataFrame.plot("visuals-line").line()

//     clearVisualContainer("visuals-hist")
//     dataFrame.plot("visuals-hist").hist({ config: { bins: 10 } })

// }


// function checkForNaN(cols) {
//     let hasNaN = false
//     for (let col of cols) {
//         const nanCount = df.loc({ columns: [col] }).isNa().sum().values[0]
//         if (nanCount > 0) {
//             hasNaN = true
//             break
//         }
//     }
//     document.getElementById("replaceNAN").disabled = !hasNaN
// }

// function cleanDataWithMean() {
//     if (df) {
//         df.columns.forEach(col => {
//             const columnData = df[col].values
//             const isNumeric = columnData.some(value => typeof value === 'number' && !isNaN(value))

//             if (isNumeric) {
//                 const mean = ~~(df[col].mean())
//                 df[col] = df[col].fillNa(mean)
//             }
//         })
//         data = dfd.toJSON(df)

//         // Call generateCharts with the updated DataFrame
//         generateCharts(df)
//         console.log("NaN values replaced with column means.")
//     } else {
//         console.log("No data loaded yet.")
//     }
// }


// document.getElementById("replaceNAN").addEventListener("click", function () {
//     if (this.checked) {
//         cleanDataWithMean()
//     } else {
//         console.log("replaceNAN checkbox is unchecked. No changes will be made.")
//     }
// })

/* SEGMENT A END */

/* SEGMENT B START */

// Declare global variables for the file and DataFrame (df)
// let file
// let df
// let data

// // READ FILE
// document.getElementById("csvUpload").addEventListener("change", async function (event) {
//     file = event.target.files[0]  // Assign to global file variable
//     if (file) {
//         // Read CSV and assign to the global df variable
//         console.log("File type:", file.type)  // Log file type for debugging
//         if (file.type === "text/csv" || file.name.endsWith(".csv")) {
//             dfd.readCSV(file)
//                 .then(dataFrame => {
//                     df = dataFrame // Assign to the global DataFrame variable
//                     const cols = df.columns
//                     data = dfd.toJSON(df)

//                     // Generate initial visualizations
//                     createVisualizations(data)
//                     // Check for NaN values in the columns and enable the checkbox
//                     checkForNaN(cols)
//                     // Show the checkbox after file is loaded
//                     document.getElementById("replaceNAN").hidden = false // Show the checkbox
//                     document.getElementById("replaceNAN").disabled = false // Enable the checkbox
//                 })
//                 .catch(err => {
//                     console.log(err)
//                 })
//         } else {
//             console.log("Please enter a CSV file")
//         }
//     }
// })

// // Function to create visualizations for DataFrame columns
// function createVisualizations(data) {
//     let dataFrame = new dfd.DataFrame(data)
//     console.log("VISUALS: ", dfd.toJSON(dataFrame))
//     if (dataFrame) {
//         visualizeTable(dataFrame)
//         dataFrame.plot("visuals-bar").bar()
//         dataFrame.plot("visuals-box").box()
//         dataFrame.plot("visuals-line").line()
//         visualizeScatter(dataFrame)
//     } else {
//         console.log("DataFrame not loaded.")
//     }
// }

// // Function to visualize the table
// function visualizeTable(dataFrame) {
//     dataFrame.plot("visuals-table").table()
// }

// // Function to visualize the scatter plot
// function visualizeScatter(dataFrame) {
//     const scatterControl = document.getElementById("visuals-scatter-control")
//     const xAxisSelect = document.getElementById("x-axis-select")
//     const yAxisSelect = document.getElementById("y-axis-select")

//     // Clear any existing options
//     xAxisSelect.innerHTML = ''
//     yAxisSelect.innerHTML = ''

//     // Populate select options with DataFrame columns
//     dataFrame.columns.forEach(column => {
//         const optionX = document.createElement("option")
//         optionX.value = column
//         optionX.text = column
//         xAxisSelect.appendChild(optionX)

//         const optionY = document.createElement("option")
//         optionY.value = column
//         optionY.text = column
//         yAxisSelect.appendChild(optionY)
//     })

//     // Event listener for Plot button
//     document.getElementById("plot-scatter").addEventListener("click", () => {
//         const xColumn = xAxisSelect.value
//         const yColumn = yAxisSelect.value

//         // Check if both x and y columns are selected
//         if (xColumn && yColumn) {
//             dataFrame.plot("visuals-scatter").scatter({config: { x: xColumn, y: yColumn }})
//         } else {
//             alert("Please select both X and Y axes.")
//         }
//     })
// }

// // Function to check for NaN values in the entire DataFrame
// function checkForNaN(cols) {
//     let hasNaN = false
//     for (let col of cols) {
//         const nanCount = df.loc({ columns: [col] }).isNa().sum().values[0]
//         if (nanCount > 0) {
//             hasNaN = true
//             break
//         }
//     }

//     // Enable the checkbox if NaN exists in any column
//     document.getElementById("replaceNAN").disabled = !hasNaN
// }

// // Function to clean data by replacing NaN with mean across numeric columns
// function cleanDataWithMean() {
//     if (df) {
//         const cols = df.columns

//         // Loop through each column and replace NaN with mean for numeric columns
//         cols.forEach(col => {
//             const columnData = df[col].values

//             // Check if column is numeric
//             const isNumeric = columnData.some(value => typeof value === 'number' && !isNaN(value))

//             if (isNumeric) {
//                 // Calculate mean, ignoring NaN values
//                 const mean = ~~(df[col].mean())

//                 // Replace NaN values with the mean using fillna
//                 df[col] = df[col].fillNa(mean)
//             }
//         })

//         data = dfd.toJSON(df)
//         // Update the table visualization after data cleaning
//         createVisualizations(data)
//         console.log("NaN values replaced with column means.")
//     } else {
//         console.log("No data loaded yet.")
//     }
// }

// // Event listener for the checkbox click to replace NaNs with mean
// document.getElementById("replaceNAN").addEventListener("click", function () {
//     if (this.checked) {
//         cleanDataWithMean()
//     } else {
//         console.log("replaceNAN checkbox is unchecked. No changes will be made.")
//     }
// })

/* SEGMENT B END */

/* SEGMENT C START */

let file, df, data, dataFrameCopy

document.getElementById("csvUpload").addEventListener("change", async function (event) {
    file = event.target.files[0]
    if (file && (file.type === "text/csv" || file.name.endsWith(".csv"))) {
        dfd.readCSV(file)
            .then(dataFrame => {
                df = dataFrame
                data = dfd.toJSON(df) // Save JSON data for local copies
                
                // Populate column options in the group-by dropdown
                populateGroupByOptions()

                // Initial visualization and other operations
                createVisualizations(data)
                checkForNaN(df.columns)

                document.getElementById("replaceNAN").hidden = false
                document.getElementById("replaceNAN").disabled = false
            })
            .catch(err => console.log(err))
    } else {
        console.log("Please enter a CSV file")
    }
})

// document.getElementById("csvUpload").addEventListener("change", async function (event) {
//     file = event.target.files[0]
//     if (file && (file.type === "text/csv" || file.name.endsWith(".csv"))) {
//         dfd.readCSV(file)
//             .then(dataFrame => {
//                 df = dataFrame
//                 const cols = df.columns
//                 data = dfd.toJSON(df)

//                 createVisualizations(data)
//                 checkForNaN(cols)

//                 document.getElementById("replaceNAN").hidden = false
//                 document.getElementById("replaceNAN").disabled = false
//                 populateGroupByOptions(df.columns)  // Pass in the columns from the uploaded DataFrame
//             })
//             .catch(err => console.log(err))
//     } else {
//         console.log("Please enter a CSV file")
//     }
// })

// Function to create visualizations with axis selection
function createVisualizations(data) {
    let dataFrame = new dfd.DataFrame(data)

    if (dataFrame) {
        visualizeTable(dataFrame)   // Display table

        // For charts without specific axis selection
        dataFrame.plot("visuals-bar").bar()

        // For charts with x and y-axis control
        setupAxisControl(dataFrame, "visuals-line", "Plot Line", visualizeLine)
        setupAxisControl(dataFrame, "visuals-box", "Plot Boxplot", visualizeBoxplot)
        setupAxisControl(dataFrame, "visuals-hist", "Plot Histogram", visualizeHistogram)
        visualizeScatter(dataFrame)  // Scatter plot already set up
    } else {
        console.log("DataFrame not loaded.")
    }
}

// Setup Axis Selection Controls
function setupAxisControl(dataFrame, plotId, buttonText, plotFunction) {
    const controlDiv = document.getElementById(`${plotId}-control`)
    controlDiv.innerHTML = ""  // Clear previous controls if any

    // Create dropdowns for x and y axes
    const xSelect = document.createElement("select")
    const ySelect = document.createElement("select")
    xSelect.classList.add("form-select", "me-2")
    ySelect.classList.add("form-select", "me-2")

    dataFrame.columns.forEach(col => {
        const optionX = document.createElement("option")
        optionX.value = col
        optionX.text = col
        xSelect.appendChild(optionX)

        const optionY = document.createElement("option")
        optionY.value = col
        optionY.text = col
        ySelect.appendChild(optionY)
    })

    const plotButton = document.createElement("button")
    plotButton.classList.add("btn", "btn-primary")
    plotButton.innerText = buttonText

    plotButton.addEventListener("click", () => {
        const xCol = xSelect.value
        const yCol = ySelect.value

        if (xCol && yCol) {
            plotFunction(dataFrame, plotId, xCol, yCol)
        } else {
            alert("Please select both X and Y axes.")
        }
    })

    controlDiv.append(xSelect, ySelect, plotButton)
}

// Visualization Functions
function visualizeTable(dataFrame) {
    dataFrame.plot("visuals-table").table()
}

function visualizeLine(dataFrame, plotId, xCol, yCol) {
    dataFrame.plot(plotId).line({ config: { x: xCol, y: yCol } })
}

function visualizeBoxplot(dataFrame, plotId, xCol, yCol) {
    dataFrame.plot(plotId).box({ config: { x: xCol, y: yCol } })
}

function visualizeHistogram(dataFrame, plotId, xCol, yCol) {
    dataFrame.plot(plotId).hist({ config: { x: xCol, y: yCol } })
}

function visualizeScatter(dataFrame) {
    const xAxisSelect = document.getElementById("x-axis-select")
    const yAxisSelect = document.getElementById("y-axis-select")

    xAxisSelect.innerHTML = ''
    yAxisSelect.innerHTML = ''

    dataFrame.columns.forEach(column => {
        const optionX = document.createElement("option")
        optionX.value = column
        optionX.text = column
        xAxisSelect.appendChild(optionX)

        const optionY = document.createElement("option")
        optionY.value = column
        optionY.text = column
        yAxisSelect.appendChild(optionY)
    })

    document.getElementById("plot-scatter").addEventListener("click", () => {
        const xColumn = xAxisSelect.value
        const yColumn = yAxisSelect.value

        if (xColumn && yColumn) {
            dataFrame.plot("visuals-scatter").scatter({ config: { x: xColumn, y: yColumn } })
        } else {
            alert("Please select both X and Y axes.")
        }
    })
}

function generateCharts(dataFrame) {
    dataFrame.plot("visuals-bar").bar()
    dataFrame.plot("visuals-box").box()
    dataFrame.plot("visuals-line").line()

    dataFrame.plot("visuals-histogram").hist({ config: { bins: 10 } })
    const pieColumn = dataFrame.columns[0]  // Example: using the first column for pie chart

    if (pieColumn) {
        dataFrame.plot("visuals-pie").pie({ labels: pieColumn })
    }
}

function checkForNaN(cols) {
    let hasNaN = false
    for (let col of cols) {
        const nanCount = df.loc({ columns: [col] }).isNa().sum().values[0]
        if (nanCount > 0) {
            hasNaN = true
            break
        }
    }
    document.getElementById("replaceNAN").disabled = !hasNaN
}

function cleanDataWithMean() {
    if (df) {
        df.columns.forEach(col => {
            const columnData = df[col].values
            const isNumeric = columnData.some(value => typeof value === 'number' && !isNaN(value))

            if (isNumeric) {
                const mean = ~~(df[col].mean())
                df[col] = df[col].fillNa(mean)
            }
        })
        data = dfd.toJSON(df)
        createVisualizations(data)
        console.log("NaN values replaced with column means.")
    } else {
        console.log("No data loaded yet.")
    }
}

document.getElementById("replaceNAN").addEventListener("click", function () {
    if (this.checked) {
        cleanDataWithMean()
    } else {
        console.log("replaceNAN checkbox is unchecked. No changes will be made.")
    }
})

// Populate column selection dropdown when data is uploaded
function populateGroupByOptions() {
    const groupColumnSelect = document.getElementById("group-column-select")
    groupColumnSelect.innerHTML = '' // Clear any existing options

    // Populate with columns from the uploaded DataFrame
    df.columns.forEach(column => {
        const option = document.createElement("option")
        option.value = column
        option.text = column
        groupColumnSelect.appendChild(option)
    })
}

// function populateGroupByOptions(columns) {
//     const groupSelect = document.getElementById("group-column-select")
//     groupSelect.innerHTML = ""  // Clear previous options

//     columns.forEach(col => {
//         const option = document.createElement("option")
//         option.value = col
//         option.text = col
//         groupSelect.appendChild(option)
//     })
// }

// DATA MANIPULATION SEGMENT

// Event listener for "Group by Column" button
document.getElementById("group-button").addEventListener("click", () => {
    const selectedColumn = document.getElementById("group-column-select").value

    if (selectedColumn) {
        // Create a local copy of the DataFrame for manipulation
        dataFrameCopy = new dfd.DataFrame(data)

        // Group by the selected column and aggregate count for each group
        const groupedData = dataFrameCopy.groupby([selectedColumn]).count()

        // Display the grouped data in the manipulation section
        displayManipulatedTable(groupedData)
    } else {
        alert("Please select a column to group by.")
    }
})

// document.getElementById("group-button").addEventListener("click", () => {
//     const groupColumn = document.getElementById("group-column-select").value

//     if (groupColumn) {
//         // alert(groupColumn)
//         let grp = new dfd.DataFrame(data)
//         grp.groupby(groupColumn).print()
//         // // Create a separate DataFrame for manipulation
//         // const dfCopy = new dfd.DataFrame(data)

//         // // Group by selected column and aggregate other columns
//         // // const groupedData = dataFrameCopy.groupby([groupColumn]).agg({
//         // //     "all": (x) => x.count()  // Example: Counting entries in each group
//         // // })

//         // // Display the grouped table
//         // displayManipulatedTable(dfCopy.groupby([groupColumn]))
//     } else {
//         alert("Please select a column to group by.")
//     }
// })

function displayManipulatedTable(groupedDataFrame) {
    // Display the grouped data as a table
    groupedDataFrame.plot("manipulated-table").table()
}

// function displayManipulatedTable(groupedData) {
//     const tableContainer = document.getElementById("manipulated-table")
//     tableContainer.innerHTML = ''  // Clear previous table if any

//     // Convert groupedData to a DataFrame
//     const groupedDataFrame = new dfd.DataFrame(groupedData)
//     console.log(groupedDataFrame)
//     console.log(groupedDataFrame.toJSON())

//     // Display the grouped table
//     groupedDataFrame.plot("manipulated-table").table()
// }



/* SEGMENT C END */