create database case_5;
create table case_5.User (
    username varchar(255) primary key);
create table case_5.chat (
    chat_id integer auto_increment primary key ,
    username_sender varchar (255) not null ,
    username_receiver varchar (255) default username_sender,
    message text not null ,
    sent_date datetime not null ,
    foreign key (username_sender) references User (username) on update cascade ,
    foreign key (username_receiver) references User (username) on update cascade
);