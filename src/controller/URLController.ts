import { config } from '../config/Constants';
import { Request, Response } from 'express';
import shortId from 'shortid';
import requestIp from 'request-ip';
import { URLModel } from '../database/model/URL';
import { URLAccessModel } from '../database/model/URLAccess';

export class URLController {
    public async shorten (req : Request, res : Response) : Promise<void> {
        
        const { originURL } = req.body;
        
        if(!originURL) {
            res.status(400).json({ error: "Requisição inválida" });
            return;
        }

        try {
            const url = await URLModel.findOne({ originURL });

            if(url) {
                res.json(url);
                return;
            }

            const hash = shortId.generate();
            const shortURL = `${config.API_URL}/${hash}`;
            
            const newURL = await URLModel.create({ originURL, hash, shortURL });
        
            res.json(newURL);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Falha ao processar requisição"});
        }
    }

    public async redirect (req : Request, res : Response) : Promise<void> {

        const { hash } = req.params;
        const resquesterIp = requestIp.getClientIp(req) || "0.0.0.0";

        try {
            const url = await URLModel.findOne({ hash });

            if(url) {
                URLAccessModel.create({ 
                    hash,
                    ipAddress: resquesterIp,
                    accessDate: new Date()
                });
                res.redirect(url.originURL);
                return;
            }

            res.status(400).json({ error: "URL não encontrada" });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Falha ao processar requisição"});
        }
    }
}