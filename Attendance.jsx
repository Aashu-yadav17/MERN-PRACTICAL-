function Attendance(){
    const tc =60;
    const p =55;
    const per =(p/tc)*100;
    return(
        <div>
            <h1>Attendance</h1>
            <p>Total Classes: {tc}</p>
            <p>Present: {p}</p>
            <p>Attendance:{per.toFixed(2)}%</p>
        </div>
    );
}
export default Attendance;