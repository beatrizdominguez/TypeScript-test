
-- Database: "influencity"


-- DROP TABLE "Influencers";

CREATE TABLE "Influencers"
(
  id serial NOT NULL,
  name character varying(255) NOT NULL,
  "lastName" text NOT NULL,
  "gender" text NOT NULL,
  "deletionDate" timestamp with time zone,
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL,
  CONSTRAINT "Influencers_pkey" PRIMARY KEY (id)
);


-- Table: "Socialmedia"

CREATE TABLE "Socialmedia"
(
  id serial NOT NULL,
  name character varying(255) NOT NULL,
  "influencerId" integer,
  "profileUrl" character varying(255) NOT NULL,
  "photoProfile" character varying(255),
  "followers" integer,
  "totalPosts" integer,
  "deletionDate" timestamp with time zone,
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL,
  CONSTRAINT "Socialmedia_pkey" PRIMARY KEY (id),
  CONSTRAINT "Socialmedia_influencerId_fkey" FOREIGN KEY ("influencerId")
      REFERENCES "Influencers" (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Index: "sortByUrl"

-- DROP INDEX "sortByUrl";

/*
CREATE UNIQUE INDEX "sortByProfileUrl"
  ON "Socialmedia"
  USING btree
  (profileUrl COLLATE pg_catalog."default");
*/




INSERT INTO public."Influencers"(id, name, "lastName", gender, "deletionDate", "createdAt", "updatedAt")
	VALUES (1, 'Cristina', 'Pedroche', 'f', null, current_date, current_date);
INSERT INTO public."Influencers"(id, name, "lastName", gender, "deletionDate", "createdAt", "updatedAt")
	VALUES (2, 'Chiara', 'Ferragni', 'f', null, current_date, current_date);
INSERT INTO public."Influencers"(id, name, "lastName", gender, "deletionDate", "createdAt", "updatedAt")
	VALUES (3, 'Zach', 'King', 'm', null, current_date, current_date);


INSERT INTO public."Socialmedia"(id, name, "influencerId", "profileUrl", "photoProfile", followers, "totalPosts", "deletionDate", "createdAt", "updatedAt")
	VALUES (1, 'Twitter', 1, 'Cristina Pedroche', null, 556, 568, null, current_date, current_date);
INSERT INTO public."Socialmedia"(id, name, "influencerId", "profileUrl", "photoProfile", followers, "totalPosts", "deletionDate", "createdAt", "updatedAt")
	VALUES (2, 'Instagram', 2, 'Chiara Ferragni', null, 4567, 6487, null, current_date, current_date);
INSERT INTO public."Socialmedia"(id, name, "influencerId", "profileUrl", "photoProfile", followers, "totalPosts", "deletionDate", "createdAt", "updatedAt")
	VALUES (3, 'YouTube', 3, 'Zach King', null, 65687, 894, null, current_date, current_date);
