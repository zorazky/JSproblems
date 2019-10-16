function ipToDecimal(ip) {
    let binary = '';
    const octets = ip.split('.');
    
    octets.forEach(octet => {
        const binaryOctet = Number(octet).toString(2);
        binary += binaryOctet.padStart(8, '0');
        
    })
    
    return parseInt(binary, 2);
    //console.log(decimal)
}

function ipsBetween(start, end){
    return ipToDecimal(end) - ipToDecimal(start)
}