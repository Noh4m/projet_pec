import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

// Regular expression to validate an email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const { email, password, nom, adresse, telephone, role } = await req.json();

  // Check for mandatory fields
  const missingFields = [];
  if (!email) missingFields.push("email");
  if (!password) missingFields.push("password");
  if (!role) missingFields.push("role");

  // Validate email format
  if (email && !emailRegex.test(email)) {
    return NextResponse.json(
      { error: 'L\'email fourni n\'est pas valide.' },
      { status: 400 }
    );
  }

  // Validate mandatory fields for specific roles (e.g., client)
  if (role === 'client') {
    if (!nom) missingFields.push("nom");
    if (!telephone) {
      missingFields.push("telephone");
    } else if (!/^\d{10}$/.test(telephone)) { // Validate 10-digit format
      return NextResponse.json(
        { error: 'Le numéro de téléphone doit contenir exactement 10 chiffres.' },
        { status: 400 }
      );
    }
  }

  // Return an error if any mandatory fields are missing
  if (missingFields.length > 0) {
    return NextResponse.json(
      { error: `Les champs suivants sont obligatoires : ${missingFields.join(', ')}.` },
      { status: 400 }
    );
  }

  // Check if the email already exists
  const existingUser = await prisma.utilisateur.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json({ error: 'Cet email est déjà utilisé.' }, { status: 400 });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the user
  const user = await prisma.utilisateur.create({
    data: {
      email,
      passwordHash: hashedPassword,
      nom,
      adresse,
      phone: telephone,
      type: {
        connect: { id: role === 'client' ? 1 : 2 }, // Assuming roles are defined with IDs
      },
    },
  });

  return NextResponse.json(user);
}
