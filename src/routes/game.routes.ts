import { Router } from "express";

const router: Router = Router();

router.get("/", (_req, res) => {

    const rowLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const columnLabels = [1,2,3,4,5,6,7,8,9,10];
    const gameStatus = {
        LE_DIO: "LE_DIO",
        NO_LEDIO: "NO_LEDIO",
        VACIO: "VACIO",
        BARCO: "BARCO"
    }
    const dashboardArray: string[][] = Array.from(
        { length: 10 },
        (_, _i) => Array.from({ length: 10 }, () => gameStatus.VACIO)
    );

    (dashboardArray[2] ?? [])[0] = gameStatus.BARCO;
    (dashboardArray[2] ?? [])[1] = gameStatus.BARCO;
    (dashboardArray[2] ?? [])[2] = gameStatus.BARCO;
    (dashboardArray[2] ?? [])[3] = gameStatus.BARCO;
    (dashboardArray[2] ?? [])[4] = gameStatus.BARCO;

    (dashboardArray[5] ?? [])[7] = gameStatus.BARCO;
    (dashboardArray[6] ?? [])[7] = gameStatus.BARCO;
    (dashboardArray[7] ?? [])[7] = gameStatus.BARCO;
    (dashboardArray[8] ?? [])[7] = gameStatus.BARCO;
    (dashboardArray[9] ?? [])[7] = gameStatus.BARCO;


    res.render("game", { rowLabels, dashboardArray, columnLabels });
});


export default router;