                        <Label htmlFor="firstName" className="text-slate-700 dark:text-slate-300">
                          First name
                        </Label>
                        <Input
                          id="firstName"
                          required
                          value={form.firstName}
                          onChange={handleChange}
                          placeholder="Enter your first name"
                          className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-slate-700 dark:text-slate-300">
                          Last name
                        </Label>
                        <Input
                          id="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          placeholder="Enter your last name"
                          className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">
                        Email
                      </Label>
                      <Input
                        id="email"
                        required
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-slate-700 dark:text-slate-300">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Enter the subject"
                        className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-700 dark:text-slate-300">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        required
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        className="min-h-[120px] bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 bg-white/50 dark:bg-slate-900/50">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
            © {new Date().getFullYear()} Talha Jobayer Zihan. Made with
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
          </p>
          <div className="flex items-center space-x-4">
            {[
              { href: "https://github.com/jobayertalha", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/talha-jobayer-696a74237/", icon: Linkedin, label: "LinkedIn" },
              { href: "https://www.facebook.com/talha.jobayer.39/", icon: Facebook, label: "Facebook" },
              { href: "https://www.kaggle.com/talhajobayer", icon: BarChart3, label: "Kaggle" },
              { href: `mailto:${CONTACT_EMAIL}`, icon: Mail, label: "Email" },
            ].map((social) => (
              <Link
                key={social.href}
                href={social.href}
                aria-label={social.label}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className={iconLinkClass}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
