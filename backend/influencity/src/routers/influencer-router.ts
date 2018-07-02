import {influencerService} from "../services/influencer-service";
import {InfluencerInstance} from "../models/interfaces/influencer-interface";
import {Request, Response, Router} from "express";

export const router = Router();

router.post("/", (req: Request, res: Response) => {
  influencerService.createInfluencer(req.body).then((influencer: InfluencerInstance) => {
    return res.status(201).send(influencer);
  }).catch((error: Error) => {
    return res.status(409).send(error);
  });
});

router.get("/:name", (req: Request, res: Response) => {
  influencerService.retrieveInfluencer(req.params.name).then((influencer: InfluencerInstance) => {
    if (influencer) {
      return res.send(influencer);
    } else {
      return res.sendStatus(404);
    }
  }).catch((error: Error) => {
    return res.status(500).send(error);
  });
});

router.get("/", (req: Request, res: Response) => {
  influencerService.retrieveInfluencers().then((influencer: Array<InfluencerInstance>) => {
    return res.send(influencer);
  }).catch((error: Error) => {
    return res.status(500).send(error);
  });
});

router.post("/:name", (req: Request, res: Response) => {
  influencerService.updateInfluencer(req.params.name, req.body).then(() => {
    return res.sendStatus(200);
  }).catch((error: Error) => {
    return res.status(409).send(error);
  });
});

router.delete("/:name", (req: Request, res: Response) => {
  influencerService.deleteInfluencer(req.params.name).then(() => {
    return res.sendStatus(200);
  }).catch((error: Error) => {
    return res.status(500).send(error);
  });
});
