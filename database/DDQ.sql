-- drop tables here to not have foreign key errors
set foreign_key_checks=0;
drop table if exists `Museums`;
drop table if exists `Exhibitions`;
set foreign_key_checks=1;

create table  `Museums` (
  `museumId` int auto_increment not null primary key,
  `Name` varchar(255) not null,
  `Type` varchar(255) not null check(`type` = 'Art'
                                  or `type` = 'History'
                                  or `type` = 'Science'
                                  or `type` = 'Other'),
  `email` varchar(255),
  `address` varchar(255),
  `website` varchar(255),
  `largePicture` varchar(255),
  `smallPicture` varchar(255),
  `description` varchar(4000),
  unique key `museumId`(`museumId`)
) ENGINE=InnoDB;

create table  `Exhibitions` (
  `exhibitId` int auto_increment not null primary key,
  `startDate` date not null,
  `endDate` date not null,
  `museumId` int not null,
  `petId` int not null,
  `roomId` int,
  `employeeId` int,
  -- don't let a Museum with Exhibitions get deleted
  constraint `exhibits_fk1` foreign key (`museumId`) references `Museums`(`museumId`) on delete restrict on update cascade,
  unique key `exhibitId`(`exhibitId`)
) ENGINE=InnoDB;
