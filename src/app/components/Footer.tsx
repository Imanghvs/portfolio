const Footer = () => {
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto px-4 sm:px-8 py-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
