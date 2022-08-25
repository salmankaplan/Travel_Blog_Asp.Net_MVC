﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Traveller.Models
{
    public class Image
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int PlaceId { get; set; }
        public bool State { get; set; }
        public Place Place { get; set; }
    }
}