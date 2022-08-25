using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using System.Web.Mvc;
using Traveller.BlogModel;
using Traveller.Models;

namespace Traveller.Controllers
{
    public class HomeController : Controller
    {
        DataContext db = new DataContext();
        public ActionResult Index()
        {
            TravelModel travel = new TravelModel();

            travel.Place = db.Place.Where(x => x.State == true && x.AvRate >= 3).OrderByDescending(x=>x.AvRate).ToList();
            travel.Slider = db.Slider.ToList();
            return View(travel);
        }
        public ActionResult AboutMe()
        {
            return View();
        }
        [HttpGet]
        public ActionResult Contact()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Contact(string Email, string Subject, string Name, string Message)
        {
            
            var fromAddress = new MailAddress("nazliertesin1997@gmail.com");
            //var fromAddress = new MailAddress("blogtravel582@gmail.com");
            var toAddress = new MailAddress("kaplansalman46@gmail.com");
            //Credentials = new NetworkCredential(fromAddress.Address, "Travel123Blog")

            try
            {

                using (var smtp = new SmtpClient
                {
                    Host = "smtp.gmail.com",
                    Port = 587, // 587,//Port=25,/
                    EnableSsl = true,
                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    UseDefaultCredentials = false,
                    Timeout = 30000
                })
                {
                    using (var message = new MailMessage(fromAddress, toAddress)
                    {
                        Subject = Subject,
                        Body = Message,
                        IsBodyHtml = true
                    })
                    {
                        smtp.Send(message);
                    }
                }

            }
            catch
            {
                ViewBag.mesaj = "hata";
            }

            return View();


        }
    }
}