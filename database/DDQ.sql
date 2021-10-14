-- drop tables here to not have foreign key errors
set foreign_key_checks=0;
drop table if exists `Museums`;
drop table if exists `Exhibitions`;
drop table if exists `LastUpdate`;
set foreign_key_checks=1;

create table  `Museums` (
  `museumId` int auto_increment not null primary key,
  `name` varchar(255) not null,
  `type` varchar(255) not null check(`type` = 'Art'
                                  or `type` = 'History'
                                  or `type` = 'Science'
                                  or `type` = 'Other'),
  `email` varchar(255),
  `phone` varchar(255),
  `address` varchar(255),
  `website` varchar(255),
  `largePicture` varchar(255),
  `smallPicture` varchar(255),
  `description` varchar(4000),
  unique key `museumId`(`museumId`)
) ENGINE=InnoDB;

create table  `Exhibitions` (
  `exhibitId` int auto_increment not null primary key,
  `exhibitName` varchar(255),
  `exhibitInfo` varchar(255),
  `startDate` date not null,
  `endDate` date not null,
  `museumId` int not null,
  -- don't let a Museum with Exhibitions get deleted
  constraint `exhibits_fk1` foreign key (`museumId`) references `Museums`(`museumId`) on delete restrict on update cascade,
  unique key `exhibitId`(`exhibitId`)
) ENGINE=InnoDB;

create table  `LastUpdate` (
  `lastUpdate` date,
  unique key `lastUpdate`(`lastUpdate`)
) ENGINE=InnoDB;

insert into `Museums` values (1, 'Virginia Museum of Fine Arts', 'Art', 'info@vmfa.museum', '(804) 340-1400', '200 N. Arthur Ashe Boulevard, Richmond, VA 23220', 'www.vmfa.museum', 'vmfa.jpg', 'vmfa.jpg', 'The Virginia Museum of Fine Arts in Richmond, Virginia, is one of the largest comprehensive art museums in the United States. VMFA’s permanent holdings encompass nearly 40,000 artworks, including the largest public collection of Fabergé outside of Russia, the finest collection of Art Nouveau outside of Paris, and one of the nation’s finest collections of American art. The Virginia Museum of Fine Arts is the only art museum in the United States open 365 days a year with free general admission.');
insert into `Museums` values (2, 'Virginia Museum of History and Culture', 'History', 'info@vahistory.org', '(804) 340-1800', '428 N. Arthur Ashe Boulevard, Richmond, VA 23220', 'https://virginiahistory.org', 'vahistory.jpg', 'vahistory.jpg', 'The Virginia Museum of History & Culture is owned and operated by the Virginia Historical Society—a private, non-profit organization. The historical society is the oldest cultural organization in Virginia, and one of the oldest and most distinguished history organizations in the nation. For use in its state history museum and its renowned research library, the historical society cares for a collection of nearly nine million items representing the ever-evolving story of Virginia.');
insert into `Museums` values (3, 'Science Museum of Virginia', 'Science', 'info@smv.org', '(804) 864-1466', '2500 West Broad Street, Richmond, VA 23220', 'https://smv.org', 'vascience.jpg', 'vascience.jpg', null);
insert into `Museums` values (4, 'The Valentine', 'History', 'info@thevalentine.org',  '(804) 649-0711','1015 East Clay Street, Richmond, VA 23219', 'https://thevalentine.org', 'valentine.jpg', 'valentine.jpg', null);
insert into `Museums` values (5, 'Institute for Contemporary Art', 'Art', 'ica@vcu.edu', '(804) 828-2823', '601 West Broad Street, Richmond, VA 23220', 'https://icavcu.org', 'ica.jpg', 'ica.jpg', null);
insert into `Museums` values (6, 'American Civil War Museum', 'History', NULL, '(804) 649-1861', '480 Tredegar Street, Richmond, VA 23219', 'https://acwm.org', 'acwm.jpg', 'acwm.jpg', null);
insert into `Museums` values (7, 'Branch Museum of Architecture and Design', 'Other', 'frontdesk@branchmuseum.org', '(804) 655-6055', '2501 Monument Avenue, Richmond, VA 23220', 'https://branchmuseum.org', 'branch.jpg', 'branch.jpg', null);
insert into `Museums` values (8, 'Virginia Holocaust Museum', 'History', 'web_contact@vaholocaust.org', '(804) 257-5400', '2000 East Cary Street, Richmond, VA 23223', 'https://www.vaholocaust.org', 'holocaust.jpg', 'holocaust.jpg', null);

insert into `Exhibitions` values (1, 'Exhibition 1', 'A great exhibition', '2021-10-01', '2021-10-31', 1);
insert into `Exhibitions` values (2, 'Exhibition 1', 'A great exhibition', '2021-10-01', '2021-10-31', 2);
insert into `Exhibitions` values (3, 'Exhibition 1', 'A great exhibition', '2021-10-01', '2021-10-31', 3);
insert into `Exhibitions` values (4, 'Exhibition 1', 'A great exhibition', '2021-10-01', '2021-10-31', 4);
insert into `Exhibitions` values (5, 'Exhibition 1', 'A great exhibition', '2021-10-01', '2021-10-31', 5);
insert into `Exhibitions` values (6, 'Exhibition 1', 'A great exhibition', '2021-10-01', '2021-10-31', 6);
insert into `Exhibitions` values (7, 'Exhibition 1', 'A great exhibition', '2021-10-01', '2021-10-31', 7);
insert into `Exhibitions` values (8, 'Exhibition 1', 'A great exhibition', '2021-10-01', '2021-10-31', 8);
insert into `Exhibitions` values (9, 'Exhibition 2', 'A great exhibition', '2021-11-01', '2021-11-30', 1);
insert into `Exhibitions` values (10, 'Exhibition 2', 'A great exhibition', '2021-11-01', '2021-11-30', 2);
insert into `Exhibitions` values (11, 'Exhibition 2', 'A great exhibition', '2021-11-01', '2021-11-30', 3);
insert into `Exhibitions` values (12, 'Exhibition 2', 'A great exhibition', '2021-11-01', '2021-11-30', 4);
insert into `Exhibitions` values (13, 'Exhibition 2', 'A great exhibition', '2021-11-01', '2021-11-30', 5);
insert into `Exhibitions` values (14, 'Exhibition 2', 'A great exhibition', '2021-11-01', '2021-11-30', 6);
insert into `Exhibitions` values (15, 'Exhibition 2', 'A great exhibition', '2021-11-01', '2021-11-30', 7);
insert into `Exhibitions` values (16, 'Exhibition 2', 'A great exhibition', '2021-11-01', '2021-11-30', 8);
insert into `Exhibitions` values (17, 'Exhibition 3', 'A great exhibition', '2021-12-01', '2021-12-31', 1);
insert into `Exhibitions` values (18, 'Exhibition 3', 'A great exhibition', '2021-12-01', '2021-12-31', 2);
insert into `Exhibitions` values (19, 'Exhibition 3', 'A great exhibition', '2021-12-01', '2021-12-31', 3);
insert into `Exhibitions` values (20, 'Exhibition 3', 'A great exhibition', '2021-12-01', '2021-12-31', 4);
insert into `Exhibitions` values (21, 'Exhibition 3', 'A great exhibition', '2021-12-01', '2021-12-31', 5);
insert into `Exhibitions` values (22, 'Exhibition 3', 'A great exhibition', '2021-12-01', '2021-12-31', 6);
insert into `Exhibitions` values (23, 'Exhibition 3', 'A great exhibition', '2021-12-01', '2021-12-31', 7);
insert into `Exhibitions` values (24, 'Exhibition 3', 'A great exhibition', '2021-12-01', '2021-12-31', 8);

insert into `LastUpdate` values ('2021-10-13')