﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend_Foto.Models
{
    public class UserModel
    {

        public int ID { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ProfileImg { get; set; }
        public List<Album> Albums { get; set; }
        public List<Post> Posts { get; set; }
    }
}
