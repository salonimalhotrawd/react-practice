const heading1 = React.createElement('h1', 
{
    className:"title",
    style:{background:'aqua',border:'1px dotted green'}
}, "Heading 1","Heading 11","Heading 111");

const heading2 = React.createElement('h2', 
{
    className:"title",
    style:{background:'aqua',border:'1px dotted green'},

}, ["Heading 2", "Heading 22", "Heading 222"]);

const heading3 = React.createElement('h2', 
{
    className:"title",
    style:{background:'aqua',border:'1px dotted green'},

}, "Heading 3");

//This is also valid syntax
const container1 = React.createElement('div',null, [heading1, heading2,heading3]);

//This is also valid syntax
const container2 = React.createElement('div','', [heading1, heading2,heading3]);

 //This is not valid syntax as Create Element requires the three parameters
 const container3 = React.createElement('div', [heading1, heading2,heading3]);

const container = React.createElement('div',
{
    id:"container",
    style:{display:'flex', width:'90%', marginTop:'10px',marginBottom:'20px', gap:'100px'}
}, [heading1, heading2, heading3]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);