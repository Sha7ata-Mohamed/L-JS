const paintings = [
    { title: "Girl with a Pearl Earring", artist: "Vermeer", year: 1665 },
    { title: "Artist Holding a Thistle", artist: "Durer", year: 1493 },
    { title: "Wheatfield with Crows", artist: "Van Gogh", year: 1890 },
    { title: "Burial at Ornans", artist: "Courbet", year: 1849 },
    { title: "Sunflowers", artist: "Van Gogh", year: 1889 }
];

paintings.forEach((p) => {
    console.log(p.title + ' ' + 'by' + ' ' + p.artist + ' ' + p.year);
})