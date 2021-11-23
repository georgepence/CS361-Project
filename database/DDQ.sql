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
  `startDate` date,
  `endDate` date,
  `museumId` int not null,
  -- don't let a Museum with Exhibitions get deleted
  constraint `exhibits_fk1` foreign key (`museumId`) references `Museums`(`museumId`) on delete restrict on update cascade,
  unique key `exhibitId`(`exhibitId`)
) ENGINE=InnoDB;

create table  `LastUpdate` (
  `lastUpdate` date,
  unique key `lastUpdate`(`lastUpdate`)
) ENGINE=InnoDB;

insert into `Museums` values (1, 'Virginia Museum of Fine Arts', 'Art', 'info@vmfa.museum', '(804) 340-1400', '200 N. Arthur Ashe Boulevard, Richmond, VA 23220', 'www.vmfa.museum', 'vmfa.jpg', 'vmfa.jpg', 'The Virginia Museum of Fine Arts is one of the largest comprehensive art museums in the United States. VMFA’s permanent holdings encompass nearly 40,000 artworks, including the largest public collection of Fabergé outside of Russia, the foremost collection of Art Nouveau outside of Paris, and one of the nation’s finest collections of American art. The Virginia Museum of Fine Arts is the only art museum in the United States open 365 days a year with free general admission.');
insert into `Museums` values (2, 'Virginia Museum of History and Culture', 'History', 'info@vahistory.org', '(804) 340-1800', '428 N. Arthur Ashe Boulevard, Richmond, VA 23220', 'https://virginiahistory.org', 'vahistory.jpg', 'vahistory.jpg', 'The Virginia Museum of History & Culture the oldest cultural organization in Virginia, and one of the oldest and most distinguished history organizations in the nation. The Museum is owned by the the Virginia Historical Society, which maintains a collection of nearly nine million items representing the ever-evolving story of Virginia, for use in the Museum and its renowned research library.');
insert into `Museums` values (3, 'Science Museum of Virginia', 'Science', 'info@smv.org', '(804) 864-1466', '2500 West Broad Street, Richmond, VA 23220', 'https://smv.org', 'vascience.jpg', 'vascience.jpg', 'The Science Museum of Virginia features hundreds of experiential exhibits to foster learning and inspiration.  Hundreds of thousands of guests per year experience dynamic programming and permanent and touring exhibits along with special events such as overnight adventures, talks, summer camps and more.  The Museum’s Dome theater has the largest screen in Virginia.');
insert into `Museums` values (4, 'The Valentine', 'History', 'info@thevalentine.org',  '(804) 649-0711','1015 East Clay Street, Richmond, VA 23219', 'https://thevalentine.org', 'valentine.jpg', 'valentine.jpg', 'The Valentine Museum has been preserving Richmond’s stories and artifacts for over a century.  Located in Richmond’s historic downtown, the Valentine showcases and interprets the 400 year history of Richmnond and the surrounding region.');
insert into `Museums` values (5, 'Institute for Contemporary Art', 'Art', 'ica@vcu.edu', '(804) 828-2823', '601 West Broad Street, Richmond, VA 23220', 'https://icavcu.org', 'ica.jpg', 'ica.jpg', 'VCU’s Institute for Contemporary Art (ICA) opened in April 2018 as Richmond’s newest museum.  The ICA is a non-collecting institution, presenting cutting edge contemporary art from around the world in its four galleries, as well as performances and films.  The ICA’s Markel center building is a LEED Gold-certified building.  Admission is free.');
insert into `Museums` values (6, 'American Civil War Museum', 'History', NULL, '(804) 649-1861', '480 Tredegar Street, Richmond, VA 23219', 'https://acwm.org', 'acwm.jpg', 'acwm.jpg', 'Located in the capital of the confederacy, the American Civil War Museum presents the Civil War in all of its complexity.  The Museum’s goal is to present stories from every perspective: union, confederate, enslaved and free African Americans, soldiers, and civilians.  The Museum is located at Tredegar, which was the confederacy’s primary weapons factory during the war.');
insert into `Museums` values (7, 'Branch Museum of Architecture and Design', 'Other', 'frontdesk@branchmuseum.org', '(804) 655-6055', '2501 Monument Avenue, Richmond, VA 23220', 'https://branchmuseum.org', 'branch.jpg', 'branch.jpg', 'Located on Richmond’s historic Monument Avenue, the Branch House celebrates the inspiration and beauty of architecture and design.  Branch House’s mission is to create a space where visitors can explore design for the public good, by creating connection, improving lives, strengthening communities, and transforming the world.');
insert into `Museums` values (8, 'Virginia Holocaust Museum', 'History', 'web_contact@vaholocaust.org', '(804) 257-5400', '2000 East Cary Street, Richmond, VA 23223', 'https://www.vaholocaust.org', 'holocaust.jpg', 'holocaust.jpg', 'Opened in 1997, the Virginia Holocaust Museum preserves the stories of Holocaust survivors and their experiences through both permanent and temporary exhibitions.   Located in the historic American Tobacco Company Warehouse in Shockoe Slip, the Museum averaged 42,000 visitors annually (prior to COVID).   ');

insert into `Exhibitions` values (1, 'Man Ray: The Paris Years', '', '2021-10-30', '2022-02-21', 1);
insert into `Exhibitions` values (9, 'Ansel Adams: Compositions in Nature', '', '2021-09-25', '2022-01-02', 1);
insert into `Exhibitions` values (17, 'Frank Short: Out of the Shadows', '', '2021-06-12', '2022-01-09', 1);
insert into `Exhibitions` values (9, 'John Covert: Dada Photographer', '', '2021-11-13', '2022-05-07', 1);
insert into `Exhibitions` values (17, 'Fellowship Exhibitions', '', '2021-06-21', '2022-01-31', 1);
insert into `Exhibitions` values (9, 'Early Childhood Annual Student Exhibition', '', '2021-09-09', '2022-01-02', 1);
insert into `Exhibitions` values (17, "It's Egypt! Interactive Gallery Exhibition", '', '2021-08-01', '2022-02-01', 1);
insert into `Exhibitions` values (17, "Whistler to Cassat: American Painters in France", '', '2022-04-16', '2022-07-31', 1);
insert into `Exhibitions` values (17, "Tsherin Sherpa: Spirits", '', '2022-02-19', '2022-10-16', 1);
insert into `Exhibitions` values (17, "Across Time: Robinson House, Its Land and People", '', null, null, 1);
insert into `Exhibitions` values (2, 'The Story of Virginia', 'Interpreting 16,000 years of Virginia history', null, null, 2);
insert into `Exhibitions` values (10, 'Partners in History', 'In partnership with the Black History Museum', null, null, 2);
insert into `Exhibitions` values (3, 'Skin: Living Armor, Evolving Identity', '', '2022-04-30', '2023-01-15', 3);
insert into `Exhibitions` values (19, 'Planet Shark: Predator or Prey', '', '2022-05-28', '2022-09-05', 3);
insert into `Exhibitions` values (11, 'Hot Wheels: Race to Win', 'Buckle up and race!', '2021-09-25', '2022-01-23', 3);

insert into `Exhibitions` values (4, 'Breathing Places: Parks & Recreation in Richmond', '', '2021-05-05', '202-01-30', 4);
insert into `Exhibitions` values (12, 'The Valentine Studio Project', "Reinterpreting Valentine's sculptures, including Lost Cause works" , null, null, 4);

insert into `Exhibitions` values (5, 'Jeremy Toussaint-Baptise: Set It Off', '', '2021-10-29', '2022-06-19', 5);
insert into `Exhibitions` values (13, 'Dineo Seshee Bopape: Ile Aye, Moya, LÀ, Ndokh…Harmonic Conversions…mm', '', '2021-09-24', '2021-12-19', 5);
insert into `Exhibitions` values (21, 'Iprahim Ahmed: It Will Always Come Back To You', '', '2021-07-23', '2021-11-07', 5);
insert into `Exhibitions` values (5, 'Doing Language: Word Work', '', '2021-12-10', '2022-01-19', 5);
insert into `Exhibitions` values (13, 'Gideon Appah', '', '2022-01-21', '2022-06-19', 5);
insert into `Exhibitions` values (21, 'Sila Chanto & Belkis Ramírez: Here I Stay', '', '2022-01-21', '2022-06-19', 5);


insert into `Exhibitions` values (6, "A People's Contest: Struggles for a Nation and Freedom", '', null, null, 6);

insert into `Exhibitions` values (7, 'Joanna Tyka: Cityscapes RVA', '', '2021-10-14', '2021-12-31', 7);
insert into `Exhibitions` values (15, 'Helper', '2021 Design Build Challenge Winner', '2021-09-01', '2021-12-31', 7);
insert into `Exhibitions` values (23, 'Carlton Abbot Illustrations', '', null, null, 7);

insert into `Exhibitions` values (8, 'The Holocaust', 'The complex and sobering history of the Holocaust', null, null, 8);

insert into `LastUpdate` values ('2021-10-13')