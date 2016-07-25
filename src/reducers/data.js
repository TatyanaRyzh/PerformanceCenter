var dataForChart1 = [],
    dataForChart2 = [],
    date = new Date;

for (let i = 0; i < 365; i++) {
    dataForChart1.push({ date: new Date(86400000 * i), we: Math.round(Math.random() * 100), competitor1: Math.round(Math.random() * 100), competitor2: Math.round(Math.random() * 100), competitor3: Math.round(Math.random() * 100) });
}

for (let i = 0; i < 365; i++) {
    dataForChart2.push({ date: new Date(86400000 * i), we: Math.round(Math.random() * 100), competitor1: Math.round(Math.random() * 100), competitor2: Math.round(Math.random() * 100) });
}

export const mainData = {
    DevExtreme: {
        DataViz: [{
            info: false,
            tags: ["chart", "image"],
            index: 0,
            platform: "DevExtreme",
            product: "DataViz",
            name: "Atest",
            description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
            dataForChart: dataForChart1
        }, {
                info: false,
                tags: ["points", "line"],
                index: 1,
                platform: "DevExtreme",
                product: "DataViz",
                name: "Vtest2",
                description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of",
                dataForChart: dataForChart2
            }, {
                info: false,
                index: 2,
                tags: ["arrow", "line"],
                platform: "DevExtreme",
                product: "DataViz",
                name: "Ztest3",
                description: "But I must explain",
                dataForChart: dataForChart1
            }],//Product->DataViz
        UI: [{
            info: false,
            index: 0,
            platform: "DevExtreme",
            tags: ["buttons", "tags"],
            product: "UI",
            name: "Atest1",
            description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
            dataForChart: dataForChart1
        }, {
                info: false,
                index: 1,
                tags: ["checkbox"],
                platform: "DevExtreme",
                product: "UI",
                name: "Stest2",
                description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of",
                dataForChart: dataForChart2
            }],//Product->UI
        Grid: [{
            info: false,
            index: 0,
            tags: ["arrow", "line", "sparkline"],
            platform: "DevExtreme",
            product: "Grid",
            name: "Ctest1",
            description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
            dataForChart: dataForChart1
        }]
    },//Team->DevExtreme
    WinForms: {
        DXWord: [{
            info: false,
            index: 0,
            tags: ["chart", "line", "sparkline"],
            platform: "WinForms",
            product: "DXWord",
            name: "Ertest1",
            description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
            dataForChart: dataForChart1
        }, {
                info: false,
                index: 1,
                tags: ["sparkline", "textbox"],
                platform: "WinForms",
                product: "DXWord",
                name: "Otest2",
                description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of",
                dataForChart: dataForChart2
            }],//Product->DXWord

        XtraMap: [{
            info: false,
            index: 0,
            tags: ["line", "sparkline"],
            platform: "WinForms",
            product: "XtraMap",
            name: "Ltest1",
            description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
            dataForChart: dataForChart2
        }, {
                info: false,
                index: 1,
                tags: ["arrow"],
                platform: "WinForms",
                product: "XtraMap",
                name: "Ptest2",
                description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of",
                dataForChart: dataForChart1
            }],//Product->XtraMap
        Grid: [{
            info: false,
            index: 0,
            tags: ["arrow", "grid", "radiobutton"],
            platform: "WinForms",
            product: "Grid",
            name: "Ytest1",
            description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
            dataForChart: dataForChart2
        }]
    },//Team->WinForms

    Xamarin: {
        Grid: [{
            info: false,
            index: 0,
            tags: ["forms", "graphs"],
            platform: "Xamarin",
            product: "Grid",
            name: "Ptest1",
            description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
            dataForChart: dataForChart2
        }, {
                info: false,
                index: 1,
                tags: ["buttons1"],
                platform: "Xamarin",
                product: "Grid",
                name: "Ytest2",
                description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of",
                dataForChart: dataForChart1
            }]//Product->Grid
    }//Team->Xamarin
};