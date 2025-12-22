const dataTable = document.querySelector('#data-table')

if (dataTable) {
    let id = 1
    data.data.sort((a, b) => a.title.localeCompare(b.title))
    data.data.forEach(item => {
        // ROW
        const row = document.createElement('div')
        row.classList.add('table-row')

        // ID CELL
        const idCell = document.createElement('div')
        idCell.classList.add('table-cell')
        idCell.textContent = id++
        row.appendChild(idCell)

        // TITLE CELL   
        const titleCell = document.createElement('div')
        titleCell.classList.add('table-cell')
        titleCell.textContent = item.title
        row.appendChild(titleCell)
        
        // DESCRIPTION CELL
        /*
            <div class="table-cell">
                <div class="text-s blocks">{item.description} <span class="suggested">Suggested</span> </div>
                <div class="text-xs"><strong>URL: </strong><em><a target="_blank" href="{item.url}" class="links">View Project</a></em></strong> </div>
                <div class="text-xs"><strong>Tools:</strong> <em>{item.tools}</em></div>
                <div class="text-xs"><strong>Tags:</strong> <em>{item.tags}</em></div>
            </div>
        */
        
        const descCell = document.createElement('div')
        descCell.classList.add('table-cell')
        const descData = item.descrption + (item.mustsee ? ' <span class="suggested">&nbsp;Suggested <s>Read</s> Watch&nbsp;</span>' : '')
        const urlData = `<div class="text-xs"><strong>URL: </strong><em><a target="_blank" href="${item.url}" class="links">View Project</a></em></strong> </div>`
        const toolsData = `<div class="text-xs"><strong>Tools:</strong> <em>${item.tools}</em></div>`
        const tagsData = `<div class="text-xs"><strong>Tags:</strong> <em>${item.tags}</em></div>`
        descCell.innerHTML = `<div class="text-s blocks">${descData}</div>${urlData}${toolsData}${tagsData}`
        
        row.style.cursor = 'pointer'
        row.onclick = () => {
            window.open(item.url, '_blank')
        }
        row.appendChild(descCell)
        dataTable.appendChild(row)
    })
}