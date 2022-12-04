// clipboard kopieren funktion per javascript



const sharebuttons = document.querySelectorAll('.tile-share-button')
console.log(sharebuttons)

async function copytext(e){
//damit der button nicht zur seite geht (wegen der await methode unten muss es eine async function sein)
  e.preventDefault()
  const link = this.getAttribute('link')
  console.log(link)  
  try {
     await navigator.clipboard.writeText(link)
        alert("Copied to Clipboard " + link)
  } catch (err) {
    console.error(err)
  }
}
sharebuttons.forEach(sharebutton => sharebutton.addEventListener('click', copytext))
