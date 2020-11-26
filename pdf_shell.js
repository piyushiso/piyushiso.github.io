
$(function () {
    // Initializes all tooltips of the page.
    $('[data-toggle="tooltip"]').tooltip()
    
    // $('.text-labels').on('click', selectText(this))
})

$(document).ready(function(){
    console.log("STARTED")
    $(":checkbox").attr("checked", false)
    $(":checkbox").prop("checked", false)
    reset_data()
    console.log("ONLOAD FUNCTION EXECUTED.")
})

    // var observer = new MutationObserver(function(mutations) {
    //     // For the sake of...observation...let's output the mutation to console to see how this all works
    //     mutations.forEach(function(mutation) {
    //         console.log(mutation.type);
    //         console.log("HERE")
    //     });    
    // });

    // // Notify me of everything!
    // var observerConfig = {
    //     attributes: true, 
    //     childList: true, 
    //     characterData: true 
    // };
    
    // // Node, config
    // // In this case we'll listen to all changes to body and child nodes
    // var targetNode = document.getElementById('work_title_label');
    // observer.observe(targetNode, observerConfig);

// SELECT TEXT OF THE CONTENT-EDITABLE ELEMENTS.
$(".text_labels").click(function(){
    if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(this);
        range.select();
    } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(this);
        selection.removeAllRanges();
        selection.addRange(range);
    } else {
        console.warn("Could not select text in node: Unsupported browser.");
    }
    console.log("TEXT-SELECTED")
})

/* LEFT SIDE SETTINGS SECTION'S ONCLICK FUNCTIONS. */

$('#new_window').click(function(){
    alert("HEY")
})

$('.export_pdf').click(function(){
    console.log("---EXPORTING.----")
    export_as_pdf()
})

$('#show_demo').click(function(){
    window.open("./assets/images/demo/Demo.png", "_blank")
})

// WHEN RESET BUTTON IS CLICKED.
$('#reset_data').click(function(){
    reset_data()
})

// WHEN CLOSE BUTTON IS CLICKED.
$('#close_tab').click(function(){
    close_window()
})

/* LEFT SIDE SETTINGS SECTION'S ONCLICK FUNCTIONS. */



// FUNCTION TO OPEN NEW TAB.
function new_tab(){

}

// Function to reset inputs.
function reset_data(){
    $('.text_labels').each(
        function(){
            var def_data = $(this).attr('data-def')
            
            $(this).text(def_data)
        }
    )
    console.log('RESETED LABELS.')
    
    $('.text_inputs').each(
        function(){
            $(this).val('')
        }
    )
    console.log('RESETED FORM INPUTS.')
    console.log('DATA RESETED')
}

// FUNCTION TO CLOSE THE CURRENT TAB.
function close_window(){
    // window.close()
    // window.top.close();
    // open(location, '_self').close();
    console.log('PROBLEM ENCOUNTERED WHILE CLOSING THIS TAB')
}

// LABEL TO INPUT CHANGE.
$(".text_labels").keyup(function(){
    var input_id = $(this).attr('data-rep')+'_input';
    $("#"+input_id).val($(this).text());
})

// INPUT TO LABEL CHANGE.
$(".text_inputs").keyup(function(){
    var label_id = $(this).attr('data-rep')+'_label';
    $("#"+label_id).text($(this).val());
})

// IMAGE UPLOAD OPTIONS.
$('#customFile').change(function(){
    update_image(this)
})

// UPDATE CONTRIBUTORS.
$('.cb-var').change(function(){
    show_contributor(this)
})

// UPDATE ORGANIZATIONS.
$('.or-var').change(function(){
    show_organization(this)
})

function export_as_pdf(){
    
    // var pdf_doc = new jsPDF()
    // var HTMLelement = $('#contributors p').html()
    // console.log(HTMLelement)
    // pdf_doc.fromHTML(HTMLelement, 30, 30, {
    //     'width': '1280px',
    //     'height': '1024px'
    // })
    // pdf_doc.save('test.pdf')
    // pdf_doc.addHTML(HTMLelement, function () {
    //     pdf.save('Test.pdf');
    // });

    // var doc = new jsPDF();

    // doc.html(document.getElementById('pdf_shell'), {
    //     callback: function (doc) {
    //         doc.save();
    //     },
    //     x: 10,
    //     y: 10
    // });

    // var quotes = document.getElementById('pdf_shell');
    
    // html2canvas(quotes, {
    //     // useCORS: true, //By passing this option in function Cross origin images will be rendered properly in the downloaded version of the PDF
    //     onrendered: function(canvas) {

    //         //! MAKE YOUR PDF
    //         var pdf = new jsPDF('l', 'px', [1280, 1024]);

    //         for (var i = 0; i < quotes.clientHeight/1024; i++) {
    //             //! This is all just html2canvas stuff
    //             var srcImg  = canvas;
    //             var sX      = 0;
    //             var sY      = 0; 
    //             var sWidth  = 1280;
    //             var sHeight = 1024;
    //             var dX      = 0;
    //             var dY      = 0;
    //             var dWidth  = 1280;
    //             var dHeight = 1024;

    //             window.onePageCanvas = document.createElement("canvas");
    //             onePageCanvas.setAttribute('width', 1280);
    //             onePageCanvas.setAttribute('height', 1024);
    //             var ctx = onePageCanvas.getContext('2d');
    //             // details on this usage of this function: 
    //             // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images#Slicing
    //             ctx.drawImage(srcImg,sX,sY,sWidth,sHeight,dX,dY,dWidth,dHeight);

    //             // document.body.appendChild(canvas);
    //             var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);

    //             var width         = onePageCanvas.width;
    //             var height        = onePageCanvas.clientHeight;

    //             // ! If we're on anything other than the first page,
    //             // add another page
    //             // if (i > 0) {
    //             //     pdf.addPage(612, 791); //8.5" x 11" in pts (in*72)
    //             // }
    //             //! now we declare that we're working on that page
    //             // pdf.setPage(i+1);
    //             //! now we add content to that page!
    //             console.log("WIDTH: "+width+", HEIGHT: "+height)
    //             pdf.addImage(canvasDataURL, 'PNG', 0, 0, 1280, 1024)

    //         }
    //         //! after the for loop is finished running, we save the pdf.
    //         pdf.save('test.pdf');
    //     }
    // });

    // html2canvas($('#pdf_shell')[0], {
    //     onrendered: function(canvas){
    //         var img = canvas.toDataURL()
    //         window.open(img)
    //     }
    // })

    // var doc = new jsPDF('L', 'px', [1280, 1024])
    // var HTMLelement = $('#pdf_shell').html()

    var quotes = document.getElementById('pdf_shell');

    html2canvas(quotes, {
        useCORS: true, //By passing this option in function Cross origin images will be rendered properly in the downloaded version of the PDF
        onrendered: function(canvas) {

            var pdf = new jsPDF('l', 'px', [1280, 1024]);

            var srcImg  = canvas;
            var sX      = 0;
            var sY      = 0; 
            var sWidth  = 1280;
            var sHeight = 1024;
            var dX      = 0;
            var dY      = 0;
            var dWidth  = 1280;
            var dHeight = 1024;

            window.onePageCanvas = document.createElement("canvas");
            onePageCanvas.setAttribute('width', 1280);
            onePageCanvas.setAttribute('height', 1024);
            var ctx = onePageCanvas.getContext('2d');
            ctx.drawImage(srcImg,sX,sY,sWidth,sHeight,dX,dY,dWidth,dHeight);
            
            var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);

            var width         = onePageCanvas.width;
            var height        = onePageCanvas.clientHeight;

            pdf.addImage(canvasDataURL, 'PNG', 0, 0, 1280, 1024)

            console.log('FILE NAME: '+getFileName())
            pdf.save(getFileName());
            console.log('EXPORTED')
        }
    })
}

function getFileName(){
    var saveas = $('#reported_on_label').text()
    var day_start = saveas.indexOf('(')
    console.log(day_start)
    if(day_start != -1){
        saveas = saveas.substring(0, day_start)
        console.log('BEFORE: '+saveas)
    }
    saveas = (saveas.replace(/[ &\/\\#,+()$~%.'":*|?<>{}]/g, ''))
    return saveas+'.pdf'
}

function show_organization(ref){

    var file_name = './assets/images/organization_images/'+$(ref).attr('data-filename')+'.png'
    if($(ref).prop('checked')){
        var html_elem = "<img class='img-fluid rounded-circle' src='"+file_name+"'/>"
        
        $('.block4 #def_organizations').css({
            'display': 'none'
        })
        $('.block4 #actual_organizations').css({
            'display': 'block'
        })
        
        html_elem = $('#actual_organizations').html() + html_elem
        $('#actual_organizations').html(html_elem)
    }else{
        $('#actual_organizations img').each(function(){
            // console.log(index+'. '+$(this).attr('src'))
            if($(this).attr('src') == file_name){
                $(this).remove()
                console.log("REMOVED")
            }else{
                console.log("NONE")
            }
        })
        console.log("NOT")
    }

}

function show_contributor(ref){

    var file_name = './assets/images/contributor_images/'+$(ref).attr('data-filename')+'.png'
    if($(ref).prop('checked')){
        var html_elem = "<img class='img-fluid rounded-circle' src='"+file_name+"'/>"
        show_contributors(true)
        html_elem = $('#actual_contributors').html() + html_elem
        $('#actual_contributors').html(html_elem)
    }else{
        $('#actual_contributors img').each(function(){
            // console.log(index+'. '+$(this).attr('src'))
            if($(this).attr('src') == file_name){
                $(this).remove()
                console.log("REMOVED")
            }else{
                console.log("NONE")
            }
        })
        console.log("NOT")
    }

}

function show_contributors(ref){
    if(ref){
        $('.block4 #def_contributors').css({
            'display': 'none'
        })
        $('.block4 #actual_contributors').css({
            'display': 'block'
        })
    }else{
        $('.block4 #def_contributors').css({
            'display': 'block'
        })
        $('.block4 #actual_contributors').css({
            'display': 'none'
        })
    }
    
}

function checkAll(id){
    // $('#'+id+' :checkbox').attr("checked", true)
    // $(':checkbox').prop("checked", true)
    $('#'+id+' input').map(function(index){
        $('.cb-var').prop('checked', true)
        console.log(index+'. '+$(' .cb-var').prop('checked'))
    })
    // $('#'+id+' input').click()
    // console.log();

}

function update_image(ref){
    var fileName = $(ref).val().split("\\").pop();
    $(ref).siblings(".custom-file-label").addClass("selected").html(fileName);

    var file = $(ref)[0].files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        $('#image_section div:nth-child(1)').css('background-image', 'url("' + reader.result + '")');
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
    }

    // $('#image_section div:nth-child(1)').css({
    //     'background': "url('"+$(ref).val()+"')"
    // })
    console.log(file)
}

// export default function printDiv() 
function printDiv(){

    console.log("PRINT")

    // let mywindow = window.open('', 'PRINT', 'height=1024,width=1280,top=100,left=150');
  
    // mywindow.document.write('<html><head><title>TEST</title>');
    // mywindow.document.write("<link rel='stylesheet' href='./pdf_shell.css' />");
    // mywindow.document.write('</head><body >');
    // mywindow.document.write(document.getElementById('pdf_shell').innerHTML);
    // mywindow.document.write('</body></html>');
  
    // mywindow.document.close(); // necessary for IE >= 10
    // mywindow.focus(); // necessary for IE >= 10*/
  
    // mywindow.print();
    // mywindow.close();
  
    // return true;

    // import { jsPDF } from "./jspdf";

    // var pdf = new jsPDF("l", "px", [1280, 1024]);
	// pdf.addHTML($('#pdf_shell'), 0, 0, function() {
	//   pdf.save('div.pdf');
	// });
}