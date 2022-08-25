using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Traveller.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string TravelComment { get; set; }
        public string NameSurname { get; set; }
        public bool State { get; set; }
        public int PlaceId { get; set; }
        public Place Place { get; set; }
        public int Rate { get; set; }
    }
}