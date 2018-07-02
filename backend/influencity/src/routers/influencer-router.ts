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

router.get("/:id", (req: Request, res: Response) => {
  influencerService.getInfluencer(req.params.id).then((influencer: InfluencerInstance) => {
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
  influencerService.listInfluencers().then((influencer: Array<InfluencerInstance>) => {
    return res.send(influencer);
  }).catch((error: Error) => {
    return res.status(500).send(error);
  });
});

router.post("/:id", (req: Request, res: Response) => {
  influencerService.updateInfluencer(req.params.id, req.body).then(() => {
    return res.sendStatus(200);
  }).catch((error: Error) => {
    return res.status(409).send(error);
  });
});

router.delete("/:id", (req: Request, res: Response) => {
  influencerService.deleteInfluencer(req.params.id).then(() => {
    return res.sendStatus(200);
  }).catch((error: Error) => {
    return res.status(500).send(error);
  });
});
